//import logo from './logo.svg';
import React, {useState} from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from 'reactstrap';


function CRUD() {

  const usersData = [
    { id: 705480369, nombre: "Pedro", Apellidos: "Gutierrez", FechaCreacion: "16/03/2020", Correo: "p@gmail.com" },
    { id: 502140369, nombre: "Ana", Apellidos: "Mora", FechaCreacion: "16/03/2020", Correo: "a@gmail.com" },
    { id: 106930120, nombre: "Manuel", Apellidos: "Sanchez", FechaCreacion: "16/03/2020", Correo: "m@gmail.com" },
    { id: 103690475, nombre: "Jose", Apellidos: "Jimenez", FechaCreacion: "16/03/2020", Correo: "j@gmail.com" },
    { id: 402130589, nombre: "Luis", Apellidos: "Madrigal", FechaCreacion: "16/03/2020", Correo: "l@gmail.com" },
    { id: 304750219, nombre: "Carlos", Apellidos: "Bogantes", FechaCreacion: "16/03/2020", Correo: "c@gmail.com" },
  ];

  const [users, setUsers] = useState(usersData);
  const [modalaUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalInsert, setModalInsert] = useState(false);

  const seleccionarRegistro=(elemento, caso)=>{
    setformSeleccionado(elemento);
    (caso==='Editar')?setModalUpdate(true):setModalDelete(true)
  }

  const [formDataSeleccionado, setformSeleccionado] = useState({
    id: '',
    nombre: '',
    Apellidos: '',
    FechaCreacion: '',
    Correo: ''
  });
 
  /*const mostrarModalInsertar = () => setstarParametros({
    modalInsertar: true,
  });

  const cerrarModalInsertar = () => setstarParametros({
    modalInsertar: false,
  });

  const mostrarModalActualizar = (dato) => {
    setstarParametros({
      modalActualizar: true,
      form: dato
    });
  };*/

  /*const cerrarModalActualizar = () => setstarParametros({
    modalActualizar: false,
  });*/

  const editar = () => {
    //var contador = 0;
    var arreglo = users;
    arreglo.map((registro) => {
      if (formDataSeleccionado.id == registro.id) {
        registro.nombre = formDataSeleccionado.nombre;
        registro.Apellidos = formDataSeleccionado.Apellidos;
        registro.FechaCreacion = formDataSeleccionado.FechaCreacion;
        registro.Correo = formDataSeleccionado.Correo;
      }
      //contador++;
    });
    setUsers(arreglo);
    setModalUpdate(false);
    //var opcion = window.confirm("Datos modificados");
  }

  const handleChange =e=> {
    const {name, value}=e.target;
    setformSeleccionado((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const abrirModalInsertar=()=>{
    setformSeleccionado(null);
    setModalInsert(true);
  }

  const eliminar = () => {
    //var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    /*if (opcion == true) {
      setUsers(users.filter(user => user.id !== dato.id))
    }*/
    //var opcion = window.confirm("Datos eliminados");
    setUsers(users.filter(registro=>registro.id!==formDataSeleccionado.id));
    setModalDelete(false);
  }


  const insertar= ()=>{
    //setUsers(prevArray => [...prevArray, { id: userId, nombre: nombre, Apellidos: ape, FechaCreacion: fecha, Correo: correo }]);
    //var opcion = window.confirm("Datos guardados");
    //cerrarModalInsertar();
    var valorInsertar=formDataSeleccionado;
    valorInsertar.id=users[users.length-1].id+1;
    var dataNueva = users;
    dataNueva.push(valorInsertar);
    setUsers(dataNueva);
    setModalInsert(false);
  }

  return (
    <>
        <Container>
          <br />
            <Button color="success" onClick={()=>abrirModalInsertar()}>Crear</Button>
            <br />
            <br />
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Fecha creación</th>
                  <th>Correo</th>
                </tr>
              </thead>

              <tbody>
                {users.map((dato) => (
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.nombre}</td>
                    <td>{dato.Apellidos}</td>
                    <td>{dato.FechaCreacion}</td>
                    <td>{dato.Correo}</td>
                    <td>
                      <Button
                        color="primary"
                        onClick={() =>seleccionarRegistro(dato, 'Editar')}
                      >
                        Editar
                      </Button>{" "}
                      <Button color="danger" onClick={()=> seleccionarRegistro(dato, 'Eliminar')}>Eliminar</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
        </Container>

        <Modal isOpen={modalaUpdate}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                name="id"
                type="text"                
                value={formDataSeleccionado && formDataSeleccionado.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                value={formDataSeleccionado && formDataSeleccionado.nombre}
                onChange={handleChange}                
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Apellidos: 
              </label>
              <input
                className="form-control"
                name="Apellidos"
                type="text"
                value={formDataSeleccionado && formDataSeleccionado.Apellidos}
                onChange={handleChange}  
              />
            </FormGroup>

            <FormGroup>
              <label>
                Fecha creación: 
              </label>
              <input
                className="form-control"
                name="FechaCreacion"
                type="text"
                value={formDataSeleccionado && formDataSeleccionado.FechaCreacion}
                onChange={handleChange}  
              />
            </FormGroup>

            <FormGroup>
              <label>
                Correo: 
              </label>
              <input
                className="form-control"
                name="Correo"
                type="text"
                value={formDataSeleccionado && formDataSeleccionado.Correo}
                onChange={handleChange}  
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => editar()}
            >
              Modificar
            </Button>
            <Button
              color="danger"
              onClick={() => setModalDelete(false)}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalDelete}>
          <ModalBody>
            Estás Seguro que deseas eliminar el registro {formDataSeleccionado && formDataSeleccionado.id}
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={()=>eliminar()}>
              Sí
            </button>
            <button
              className="btn btn-secondary"
              onClick={()=>setModalDelete(false)}
            >
              No
            </button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalInsert}>
          <ModalHeader>
           <div><h3>Insertar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                name="id"
                type="text"
                value={seleccionarRegistro ? seleccionarRegistro.id: ''}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                value={formDataSeleccionado ? formDataSeleccionado.nombre: ''}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Apellidos: 
              </label>
              <input
                className="form-control"
                name="Apellidos"
                type="text"
                value={formDataSeleccionado ? formDataSeleccionado.ape: ''}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Fecha creación: 
              </label>
              <input
                className="form-control"
                name="FechaCreacion"
                type="text"
                value={formDataSeleccionado ? formDataSeleccionado.FechaCreacion: ''}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Correo: 
              </label>
              <input
                className="form-control"
                name="Correo"
                type="text"
                value={formDataSeleccionado ? formDataSeleccionado.correo: ''}
                onChange={handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => setModalInsert(false)}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
  );
}

export default CRUD;