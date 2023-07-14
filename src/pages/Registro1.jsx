import { useState } from "react";
import { Alerta } from "../components/Alerta";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { useProyectos } from "../hooks/useProyectos";




export const Registro1 = () => {


    const [numero_orden, setNumero_orden] = useState("");
    const [nombre_paciente, setNombre_paciente] = useState("");
    const [tipo_montura_id, setTipo_montura_id] = useState("");
    const [id_esfera_izq, setId_esfera_izq] = useState("");
    const [id_esfera_der, setId_esfera_der] = useState("");
    const [id_cilindro_izq, setId_cilindro_izq] = useState("");
    const [id_cilindro_der, setId_cilindro_der] = useState("");
    const [id_eje_izq, setId_eje_izq] = useState("");
    const [id_eje_der, setId_eje_der] = useState("");
    const [id_adicion_izq, setId_adicion_izq] = useState("");
    const [id_adicion_der, setId_adicion_der] = useState("");
    const [id_dnp_altura_izq, setId_dnp_altura_izq] = useState("");
    const [id_dnp_altura_der, setId_dnp_altura_der] = useState("");
    const [id_mhm, setId_mhm] = useState("");
    const [id_mvm, setId_mvm] = useState("");
    const [id_mpm, setId_mpm] = useState("");
    const [id_servicio, setId_servicio] = useState("");
    const [id_t_trabajo, setId_t_trabajo] = useState("");
    const [id_t_formula, setId_t_formula] = useState("");
    const [id_color, setId_color] = useState("");
    const [id_porcentaje, setId_porcentaje] = useState("");
    const [id_tipo_coloracion, setId_tipo_coloracion] = useState("");
    const [id_producto_cristal, setId_producto_cristal] = useState("");
    const [fecha_pedido, setFecha_pedido] = useState("");
    const [fecha_entrega, setFecha_entrega] = useState("");
    const [estado_pedido, setEstado_pedido] = useState("");


        const [alerta, setAlerta] = useState({}); 
        // const { mostrarAlerta, alerta} = useProyectos();
        const navigate = useNavigate() 


    
            const [selectedService, setSelectedService] = useState('');
          
            const handleServiceChange = (event) => {
              setSelectedService(event.target.value);
            }


        const handleSubmit = async e => {
            e.preventDefault();

            if ([numero_orden, nombre_paciente, tipo_montura_id, id_esfera_izq, id_esfera_der, id_cilindro_izq, id_cilindro_der, id_eje_izq, id_eje_der, id_adicion_izq, id_adicion_der, id_dnp_altura_izq, id_dnp_altura_der, id_mhm, id_mvm, id_mpm, id_servicio, id_t_trabajo, id_t_formula, id_color, id_porcentaje, id_tipo_coloracion, id_producto_cristal, fecha_pedido, fecha_entrega, estado_pedido ].includes("")) {
                setAlerta({
                    msg: "Todos los campos son obligatorios",
                    error: true
                }) 
                return
            }


            if ( password !== repetirPassword){

                setAlerta({
                    msg: "los password no son iguales",
                    error: true
                }) 
                return
            }
            if ( password.length < 6 ){

                setAlerta({
                    msg: "El password debe tener minimo 6 digitos",
                    error: true
                }) 
                return
            }

            setAlerta({})

         //Creando usuario
         try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/pedidos`, {numero_orden, nombre_paciente, tipo_montura_id, id_esfera_izq, id_esfera_der, id_cilindro_izq, id_cilindro_der, id_eje_izq, id_eje_der, id_adicion_izq, id_adicion_der, id_dnp_altura_izq, id_dnp_altura_der, id_mhm, id_mvm, id_mpm, id_servicio, id_t_trabajo, id_t_formula, id_color, id_porcentaje, id_tipo_coloracion, id_producto_cristal, fecha_pedido, fecha_entrega, estado_pedido})
            
            setAlerta({
                msg: data.msg,
                error: false
                
            })
            navigate('/proyectos/registro')
            
         } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error:true
            })
            
         }

        }

 const { msg } =alerta


  return (


            <>
                
    <form 
    className="card o-hidden border-0 shadow-lg my-5"
    onSubmit={handleSubmit} >
                <div className="card-header text-center">
                    <h2 className="card-title text-gray-800 mb-6">Crear Pedido </h2>
                </div>


            {/* Datos basicos */}
                <div className="card card-danger">
                <div className="card-header">
                    <h3 className="card-title">Datos Básicos</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                    <div className="col-6">
                    <label>N° Orden</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="N° de Orden"
                        value={numero_orden}
                        onChange={e => setNumero_orden(e.target.value)} />
                    </div>
                    <div className="col-6">
                    <label>Nombre del Paciente</label>
                        <input type="text" className="form-control" placeholder="Nombre del Paciente" />
                    </div>

                    </div>



                    <div className="row">

                    <div className="col-6">
                    <br />
                    <label>Tipo de Trabajo</label>
                        {/* <input type="text" className="form-control" placeholder=".col-5" /> */}
                        <select className="form-control select2" style={{width: '100%'}}>
                            <option selected="selected">Servicios</option>
                            <option>Servicio Express</option>
                            <option>Cristales con montaje</option>
                            <option>Cristales solamente</option>
                            <option>Montaje</option>
                            <option>Montaje Express (1 Hora)</option>
                            </select>
                    </div>


                    <div className="col-6">
                        <br />
                        <label>Tipo de Formula</label>
                        <select className="form-control select2"  style={{width: '100%'}}>
                            <option>Vision sencilla</option>
                            <option>Bifocal </option>
                            <option>progresivo</option>
                        </select>
                        </div>


                    </div>

                </div>
                </div>


           {/* Formulas */}
                <div class="row"> 
                    {/* Formula Ojo Izquierdo */}
                        <div className="col-md-6">
                        <div className="card-header">
                            <h3 className="card-title">Formula ojo Izquierdo</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                            <div className="col-3">
                            <label>Esfera</label>
                                {/* <input type="text" className="form-control" placeholder="N° de Orden" /> */}
                                <select className="form-control select2" style={{width: '100%'}}>
                                    {Array.from({length: 39}, (_, index) => {
                                    const value = (index * 0.5) - 10;
                                    return <option key={index} value={value}>{value}</option>;
                                    })}
                                    </select>
                            </div>
                            <div className="col-3">
                            <label>Cilindro</label>
                                {/* <input type="text" className="form-control" placeholder="N° de Orden" /> */}
                                <select className="form-control select2" style={{width: '100%'}}>
                                    {Array.from({length: 9}, (_, index) => {
                                    const value = index * 0.5;
                                    return <option key={index} value={value}>{value}</option>;
                                    })}
                                </select>
                            </div>
                            <div className="col-3">
                            <label>Eje</label>
                                {/* <input type="text" className="form-control" placeholder="N° de Orden" /> */}
                                <select className="form-control select2" style={{width: '100%'}}>
                                    {Array.from({length: 181}, (_, index) => (
                                    <option key={index} value={index}>{index}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-3">
                            <label>Adicion</label>
                                {/* <input type="text" className="form-control" placeholder="N° de Orden" /> */}
                                    <select className="form-control select2" style={{width: '100%'}}>
                                        {Array.from({length: 9}, (_, index) => {
                                        const value = (index * 0.25) + 1;
                                        return <option key={index} value={value}>{value}</option>;
                                        })}
                                    </select>
                            </div>
                            </div>
                            <div className="row">
                                        
                            <div className="col-6">
                                <br />
                            <label>DNP Lejos</label>
                                {/* <input type="text" className="form-control" placeholder="N° de Orden" /> */}
                                <select className="form-control select2" style={{width: '100%'}}>
                                    {Array.from({length: 39}, (_, index) => {
                                    const value = (index * 0.5) - 10;
                                    return <option key={index} value={value}>{value}</option>;
                                    })}
                                    </select>
                            </div>
                            <div className="col-6">
                                <br />
                            <label>DNP Altura</label>
                                {/* <input type="text" className="form-control" placeholder="N° de Orden" /> */}
                                <select className="form-control select2" style={{width: '100%'}}>
                                    {Array.from({length: 39}, (_, index) => {
                                    const value = (index * 0.5) - 10;
                                    return <option key={index} value={value}>{value}</option>;
                                    })}
                                    </select>
                            </div>

                            </div>
                        </div>
                        </div>

                    {/* Formula Ojo Derecho */}
                        <div className="col-md-6">
                        <div className="card-header">
                            <h3 className="card-title">Formula ojo Derecho</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                            <div className="col-3">
                            <label>Esfera</label>
                                {/* <input type="text" className="form-control" placeholder="N° de Orden" /> */}
                                <select className="form-control select2" style={{width: '100%'}}>
                                    {Array.from({length: 39}, (_, index) => {
                                    const value = (index * 0.5) - 10;
                                    return <option key={index} value={value}>{value}</option>;
                                    })}
                                    </select>
                            </div>
                            <div className="col-3">
                            <label>Cilindro</label>
                                {/* <input type="text" className="form-control" placeholder="N° de Orden" /> */}
                                <select className="form-control select2" style={{width: '100%'}}>
                                    {Array.from({length: 9}, (_, index) => {
                                    const value = index * 0.5;
                                    return <option key={index} value={value}>{value}</option>;
                                    })}
                                </select>
                            </div>
                            <div className="col-3">
                            <label>Eje</label>
                                {/* <input type="text" className="form-control" placeholder="N° de Orden" /> */}
                                <select className="form-control select2" style={{width: '100%'}}>
                                    {Array.from({length: 181}, (_, index) => (
                                    <option key={index} value={index}>{index}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-3">
                            <label>Adicion</label>
                                {/* <input type="text" className="form-control" placeholder="N° de Orden" /> */}
                                    <select className="form-control select2" style={{width: '100%'}}>
                                        {Array.from({length: 9}, (_, index) => {
                                        const value = (index * 0.25) + 1;
                                        return <option key={index} value={value}>{value}</option>;
                                        })}
                                    </select>
                            </div>
                            </div>


                            <div className="row">
                                        
                                        <div className="col-6">
                                            <br />
                                        <label>DNP Lejos</label>
                                            {/* <input type="text" className="form-control" placeholder="N° de Orden" /> */}
                                            <select className="form-control select2" style={{width: '100%'}}>
                                                {Array.from({length: 39}, (_, index) => {
                                                const value = (index * 0.5) - 10;
                                                return <option key={index} value={value}>{value}</option>;
                                                })}
                                                </select>
                                        </div>
                                        <div className="col-6">
                                            <br />
                                        <label>DNP Altura</label>
                                            {/* <input type="text" className="form-control" placeholder="N° de Orden" /> */}
                                            <select className="form-control select2" style={{width: '100%'}}>
                                                {Array.from({length: 39}, (_, index) => {
                                                const value = (index * 0.5) - 10;
                                                return <option key={index} value={value}>{value}</option>;
                                                })}
                                                </select>
                                        </div>
                    
                                        </div>
                        </div>
                        </div>

                </div>

            {/* Materiales */}
                <div className="card card-danger">
                <div className="card-header">
                    <h3 className="card-title">Materiales</h3>
                </div>
                <div className="card-body">




                    <div className="row">

                    <div className="col-12">
                    <br />
                    <label>Tipo de Producto o Cristal</label>
                        {/* <input type="text" className="form-control" placeholder=".col-5" /> */}
                        <select className="form-control select2" style={{width: '100%'}}>
                            <option>CRISTAL TRAIDO POR EL CLIENTE</option>
                            <option>CR-39 Terminado</option>
                            <option>AR Terminado</option>
                            <option>Fotocromatico AR Terminado</option>
                            <option>Anti Blue Terminado</option>
                            <option>Progresivo terminado claro</option>
                            <option>Cristal marrón (sol)</option>
                            <option>Cristal negro (sol)</option>
                            <option>Cristal Espejado Azul</option>
                            <option>Cristal Espejado Rojo</option>
                            <option>Cristal Espejado Verde</option>
                            <option>Cristal Espejado Amarillo</option>
                            <option>Cristal Espejado Plata</option>
                            <option>Visión sencilla CLARO</option>
                            <option>Visión sencilla AR</option>
                            <option>Visión sencilla CONVERSION</option>
                            <option>Visión sencilla BLUE SHIELD</option>
                            <option>Visión sencilla ESPEJADO AZUL</option>
                            <option>Visón sencilla ESPEJADO VERDE</option>
                            <option>Visión sencilla ESPEJADO PLATA</option>
                            <option>Flat top Tallado CLARO</option>
                            <option>Progresivo 1.56 ADDVANTAGE CLARO</option>
                            <option>Progresivo 1.56 ADDVANTAGE AR</option>
                            <option>Progresivo 1.56 ADDVANTAGE CONVERSION</option>
                            <option>Progresivo 1.56 ADDVANTAGE BLUE SHIELD AR</option>
                            <option>Progresivo 1.56 Computer ADDVANTAGE AR</option>
                            <option>Progresivo 1.56 Computer ADDVANTAGE BLUE SHIELD AR</option>
                            </select>
                    </div>
                    </div>

                </div>
                </div>


             {/* Servicios */}
                <div className="card card-danger">
                    <div className="card-header">
                        <h3 className="card-title">Servicios</h3>
                    </div>
                    <div className="card-body">

                        <br />

                        <div className="row col-12">
                        <label>Servicios</label>
                        <select className="form-control select2" style={{width: '100%'}} onChange={handleServiceChange}>
                            <option value="">Seleccionar servicio</option>
                            <option value="Coloración">Coloración</option>
                            <option value="Cambio patrón">Cambio patrón</option>
                            <option value="Plaquetas">Plaquetas</option>
                            <option value="Tornillos">Tornillos</option>
                            <option value="Ajuste de Montura">Ajuste de Montura</option>
                            <option value="Traspaso de Cristales">Traspaso de Cristales</option>
                        </select>
                        </div>
                                
                        {selectedService === "Coloración" && (<div className="row">
                        <div className="col-4">
                            <br />
                            <label>Color</label>
                            <select className="form-control select2" style={{width: '100%'}}>
                            <option value="">Seleccionar color</option>
                            <option value="Amarillo">Amarillo</option>
                            <option value="Azul">Azul</option>
                            <option value="G-15">G-15</option>
                            <option value="Negro">Negro</option>
                            <option value="Marrón">Marrón</option>
                            <option value="Rojo">Rojo</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <br />
                            <label>Porcentaje de Coloracion</label>
                            <select className="form-control select2" style={{width: '100%'}}>
                            <option value="0">Seleccionar Porcentaje</option>
                            <option value="10">10%</option>
                            <option value="30">30%</option>
                            <option value="50">50%</option>
                            <option value="80">80%</option>

                            </select>
                        </div>
                        <div className="col-4">
                            <br />
                            <label>Tipo de Coloracion</label>
                            <select className="form-control select2" style={{width: '100%'}}>
                            <option value="0">Seleccionar Porcentaje</option>
                            <option value="Degradado">Degradado</option>
                            <option value="Completo">Completo</option>
                            </select>
                        </div>
                        
                        </div>
                        )}     

                    </div>

                </div>


            


              {/* Montura */}
            <div className="card card-danger">
                <div className="card-header">
                    <h3 className="card-title">Montura</h3>
                </div>
                <div className="card-body">
                    <div className="row">

                    <div className="col-3">
                    <br />
                    <label>Tipo de montura</label>
                 
                        <select className="form-control select2" style={{width: '100%'}}>
                            <option>Pasta</option>
                            <option>Metálica</option>
                            <option>Ranurada</option>
                            <option>Al aire</option>
                            </select>
                    </div>

               

                    <div className="col-3">
                    <br />
                    <label>Medida Horizontal de la montura</label>
                        {/* <input type="text" className="form-control" placeholder=".col-5" /> */}
                        <select className="form-control select2" style={{width: '100%'}}>
                            <option selected="selected">valor en cm</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                    </div>


                    <div className="col-3">
                        <br />
                        <label>Medida Puente de la montura</label>
                        <select className="form-control select2"  style={{width: '100%'}}>
                            <option selected="selected">valor en cm</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </div>
                    <div className="col-3">
                        <br />
                        <label>Medida Vertical de la montura</label>
                        <select className="form-control select2"  style={{width: '100%'}}>
                            <option selected="selected">valor en cm</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </div>

                </div>

                </div>
            </div>

    </form> 





            </>
  )
}
