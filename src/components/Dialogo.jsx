import {
  Bar,
  Button,
  Dialog,
  FileUploader,
  RadioButton,
} from "@ui5/webcomponents-react";
import { useContext } from "react";
import { ApplicationContext } from "../Context/ApplicationContext";

export default function Dialogo() {
  const appctx = useContext(ApplicationContext);

  const cerrarDialog = () => {
    appctx.setDataContext({
      dialogo: false,
    });
  };

  return (
    <Dialog
      open={appctx.data.dialogo}
      headerText="Tipo de Documento"
      footer={
        <Bar
          design="Footer"
          endContent={
            <>
              <Button design="Positive">Aceptar</Button>
              <Button design="Negative" onClick={cerrarDialog}>
                Cancelar
              </Button>
            </>
          }
        ></Bar>
      }
    >
      <div className="dialog__content">
        <RadioButton name="facturas" text="Documento Físico" />
        <RadioButton name="facturas" text="Documento Electrónico" />
        <FileUploader className="dialog__fileuploader" hideInput>
          <Button icon="upload">Subir Archivo</Button>
        </FileUploader>
      </div>
    </Dialog>
  );
}
