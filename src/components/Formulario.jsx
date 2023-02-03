import {
  Button,
  ComboBox,
  DatePicker,
  Input,
  Title,
} from "@ui5/webcomponents-react";

export default function Formulario() {
  return (
    <div className="page_factura">
      <Title level="H5">Factura</Title>
      <div className="page_factura_bloque1">
        <Input className="bloque1__serie" placeholder="Serie" />
        <Input
          className="bloque1__numFactura"
          placeholder="Número de Factura"
        />
      </div>
      <br />
      <Title level="H5">Organizaciones</Title>
      <div className="page_factura_bloque2">
        <div className="page_factura_bloque2_form">
          <span className="form_label">Organización Compradora</span>
          <Input className="bloque2_input" readonly />
        </div>
        <div className="page_factura_bloque2_form">
          <span className="form_label">RUC del Comprador</span>
          <Input className="bloque2_input" readonly />
        </div>
        <div className="page_factura_bloque2_form">
          <span className="form_label">Organización Proveedora</span>
          <Input className="bloque2_input" readonly />
        </div>
        <div className="page_factura_bloque2_form">
          <span className="form_label">RUC del Proveedor</span>
          <Input className="bloque2_input" readonly />
        </div>
      </div>
      <br />
      <Title level="H5">Detalle Facturas</Title>
      <div className="page_factura_bloque3">
        <div className="page_factura_bloque3_form">
          <span className="form_label">&nbsp;</span>
          <DatePicker className="bloque3_inputs" />
        </div>
        <div className="page_factura_bloque3_form">
          <span className="form_label">&nbsp;</span>
          <ComboBox
            placeholder="Tipos de Factura"
            className="bloque3_inputs"
          ></ComboBox>
        </div>
        <div className="page_factura_bloque3_form">
          <span className="form_label">ERP ID</span>
          <Input
            className="bloque3_inputs"
            placeholder="Identificador del documento en ERP"
          />
        </div>
        <div className="page_factura_bloque3_form">
          <span className="form_label">&nbsp;</span>
          <Input className="bloque3_inputs" placeholder="moneda" />
        </div>
        <div className="page_factura_bloque3_form">
          <span className="form_label">Estados</span>
          <ComboBox placeholder="Emitida" className="bloque3_inputs"></ComboBox>
        </div>
        <div className="page_factura_bloque3_form">
          <span className="form_label">&nbsp;</span>
          <ComboBox
            placeholder="Tipo de Impuestos"
            className="bloque3_inputs"
          ></ComboBox>
        </div>
        <div className="page_factura_bloque3_form">
          <span className="form_label">Monto a Facturar</span>
          <Input className="bloque3_inputs" />
        </div>
      </div>
      <div className="page_factura_bloque4_form">
        <Button icon="search" design="Positive" className="bloque4__button">
          Añadir Detalle
        </Button>
      </div>
    </div>
  );
}
