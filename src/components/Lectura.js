import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase"; // Asegúrate de importar la configuración correcta de Firestore


const Lectura = () => {
  const [usuario, setUsuario] = useState([]);
  const [expandir, SetExpandir] = useState(null);

  useEffect(() => {
    const lecturaDatos = onSnapshot(collection(db, "users"), (snapshot) => {
      const usuarioData = snapshot.docs.map(doc => ({
        id: doc.id,...doc.data()
      }));
      console.log("Datos", usuarioData)
      setUsuario(usuarioData);
    });
     return () => lecturaDatos();
    }, []);
  
  const expand = (index) => {
    SetExpandir(expandir === index ? null : index);
    
  };
  
  return (
    <div className="main-lectura"> 
    <table className="main-tabla">
      
      <tbody>
        {usuario.map((user, index) => (
          <React.Fragment key={user.id}>
            <tr>
              <td>{user.nombre}</td>
              <td>
                <button onClick={() => expand(index)}>
                  {expandir === index ? "Esconder" : "Ver datos"}
                </button>
              </td>
            </tr>
            {expandir === index && (
              <tr className="expanded-row">
                <td colSpan="2">
                  <div><strong>Pais:</strong> {user.pais}</div>
                  <div><strong>Telefono:</strong> {user.telefono}</div>
                  <div><strong>Email:</strong> {user.email}</div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Lectura;

