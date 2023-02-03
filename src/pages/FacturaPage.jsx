import {
  Button,
  DynamicPage,
  DynamicPageTitle,
  Label,
  Tab,
  TabContainer,
  Table,
  TableCell,
  TableColumn,
  TableRow,
  Title,
  Toolbar,
} from "@ui5/webcomponents-react";
import Formulario from "../components/Formulario";
import "./page.css";
import { useContext } from "react";
import { ApplicationContext } from "../Context/ApplicationContext";
import { useNavigate } from "react-router-dom";

const facturas = [
  {
    id: 1,
    noc: 123456789,
    hesmigo: 12345,
    posicion: 500,
    descripcion: "Teclados numericos",
    cantidad: 50,
    pendiente: 20,
    facturar: 30,
    tipo: "nulo",
    precio: 1654.54,
    impuesto: "18%",
    total: 1700.0,
    estado: "Pendiente",
  },
];

export default function FacturaPage() {
  const appctx = useContext(ApplicationContext);
  let navigate = useNavigate();

  return (
    <div>
      <DynamicPage
        headerTitle={
          <DynamicPageTitle
            header={
              <div className="page__header">
                <Button
                  onClick={() => navigate("/")}
                  design="Transparent"
                  icon="nav-back"
                />
                <Title>PreFactura</Title>
              </div>
            }
          ></DynamicPageTitle>
        }
        showHideHeaderButton={false}
        backgroundDesign="Transparent"
      >
        <Formulario />
        <Toolbar />
        <TabContainer>
          <Tab icon="menu" selected text="Detalle Factura">
            <Table
              columns={
                <>
                  <TableColumn>
                    <Label>N° OC</Label>
                  </TableColumn>
                  <TableColumn
                    demandPopin
                    minWidth={768}
                    popinText="N° HESS-MIGO"
                  >
                    <Label>N° HESS-MIGO</Label>
                  </TableColumn>
                  <TableColumn minWidth={768} popinText="Posición">
                    <Label>Posición</Label>
                  </TableColumn>
                  <TableColumn
                    demandPopin
                    minWidth={768}
                    popinText="Descripción"
                  >
                    <Label>Descripción</Label>
                  </TableColumn>
                  <TableColumn demandPopin minWidth={768} popinText="Cantidad">
                    <Label>Cantidad</Label>
                  </TableColumn>
                  <TableColumn demandPopin minWidth={768} popinText="Pendiente">
                    <Label>Pendiente</Label>
                  </TableColumn>
                  <TableColumn demandPopin minWidth={768} popinText="Facturar">
                    <Label>Facturar</Label>
                  </TableColumn>
                  <TableColumn minWidth={768} popinText="Tipo">
                    <Label>Tipo</Label>
                  </TableColumn>
                  <TableColumn demandPopin minWidth={768} popinText="Precio">
                    <Label>Precio</Label>
                  </TableColumn>
                  <TableColumn minWidth={768} popinText="Impuesto">
                    <Label>Impuesto</Label>
                  </TableColumn>
                  <TableColumn demandPopin minWidth={768} popinText="Precio">
                    <Label>Total</Label>
                  </TableColumn>
                  <TableColumn>
                    <Label>Estado</Label>
                  </TableColumn>
                  <TableColumn>
                    <Label>Acciones</Label>
                  </TableColumn>
                </>
              }
            >
              {facturas.map((factura) => (
                <TableRow key={factura.id}>
                  <TableCell>
                    <Label>{factura.noc}</Label>
                  </TableCell>
                  <TableCell>
                    <Label>{factura.hesmigo}</Label>
                  </TableCell>
                  <TableCell>
                    <Label>{factura.posicion}</Label>
                  </TableCell>
                  <TableCell>
                    <Label>{factura.descripcion}</Label>
                  </TableCell>
                  <TableCell>
                    <Label>{factura.cantidad}</Label>
                  </TableCell>
                  <TableCell>
                    <Label>{factura.pendiente}</Label>
                  </TableCell>
                  <TableCell>
                    <Label>{factura.facturar}</Label>
                  </TableCell>
                  <TableCell>
                    <Label>{factura.tipo}</Label>
                  </TableCell>
                  <TableCell>
                    <Label>{factura.precio}</Label>
                  </TableCell>
                  <TableCell>
                    <Label>{factura.impuesto}</Label>
                  </TableCell>
                  <TableCell>
                    <Label>{factura.total}</Label>
                  </TableCell>
                  <TableCell>
                    <Label>{factura.estado}</Label>
                  </TableCell>
                  <TableCell>
                    <>
                      <Button design="Negative" icon="delete" />
                    </>
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </Tab>
          <Tab design="Critical" icon="menu" text="Archivos Adjuntos"></Tab>
        </TabContainer>
      </DynamicPage>
    </div>
  );
}

{
  /* <>
  <TableColumn style={{ width: "12rem" }}>
    <Label>Product</Label>
  </TableColumn>
  <TableColumn minWidth={800} popinText="Supplier">
    <Label>Supplier</Label>
  </TableColumn>
  <TableColumn demandPopin minWidth={768} popinText="Dimensions">
    <Label>Dimensions</Label>
  </TableColumn>
  <TableColumn demandPopin minWidth={600} popinText="Weight">
    <Label>Weight</Label>
  </TableColumn>
  <TableColumn>
    <Label>Price</Label>
  </TableColumn>
</>; */
}
