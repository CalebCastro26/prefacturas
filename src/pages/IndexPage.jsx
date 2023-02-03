import {
  Input,
  DynamicPage,
  DynamicPageTitle,
  Title,
  Toolbar,
  Button,
  Table,
  TableColumn,
  TableRow,
  TableCell,
  Label,
} from "@ui5/webcomponents-react";
import "./page.css";
import Dialogo from "../components/Dialogo";
import { useContext, useState } from "react";
import { ApplicationContext } from "../Context/ApplicationContext";

const data = [
  {
    nombre: "CSTI Corp",
    ruc: "20519339235",
  },
  {
    nombre: "Instituto tecnologico de la produccion",
    ruc: "20131369477",
  },
];

export default function IndexPage() {
  const appctx = useContext(ApplicationContext);
  const [busqueda, setBusqueda] = useState({
    ruc: "",
    organizacion: "",
  });

  function handleChange(e) {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  }

  function limpiar() {
    setBusqueda({
      ruc: "",
      organizacion: "",
    });
  }

  return (
    <div>
      <DynamicPage
        headerTitle={
          <DynamicPageTitle
            header={<span className="header__title">PreFactura</span>}
          ></DynamicPageTitle>
        }
        showHideHeaderButton={false}
        backgroundDesign="List"
      >
        <div className="page">
          <Toolbar>
            <Title className="title" level="H4">
              Seleccionar datos de inicio de registro
            </Title>
          </Toolbar>
          <form className="page__form">
            <div className="page__input_container">
              <Input
                name="ruc"
                value={busqueda.ruc}
                onInput={handleChange}
                className="page__input"
                placeholder="Ruc del Comprador"
              />
            </div>
            <div className="page__input_container">
              <Input
                name="organizacion"
                value={busqueda.organizacion}
                onInput={handleChange}
                className="page__input"
                placeholder="Organización Compradora"
              />
            </div>
            <div className="page__button_container">
              <Button
                className="page__button"
                icon="search"
                design="Emphasized"
              >
                Buscar
              </Button>
              <Button
                onClick={limpiar}
                className="page__button"
                icon="delete"
                design="Negative"
              >
                Limpiar
              </Button>
            </div>
          </form>
        </div>
        <div>
          <Toolbar>
            <Title className="title" level="H4">
              Lista de Empresas / Sociedades Compradoras
            </Title>
          </Toolbar>
          <Table
            columns={
              <>
                <TableColumn>
                  Nombre de la empresa/ Sociedad compradora
                </TableColumn>
                <TableColumn>N° de RUC</TableColumn>
                <TableColumn>Acciones</TableColumn>
              </>
            }
          >
            {data.map((empresa) => (
              <TableRow key={empresa.ruc}>
                <TableCell>{empresa.nombre}</TableCell>
                <TableCell>
                  <Label>{empresa.ruc}</Label>
                </TableCell>
                <TableCell>
                  <Button
                    icon="attachment"
                    onClick={() =>
                      appctx.setDataContext({
                        dialogo: true,
                      })
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </div>
      </DynamicPage>
      <Dialogo open={appctx.data.dialogo} />
    </div>
  );
}
