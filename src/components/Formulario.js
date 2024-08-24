import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [pais, setPais] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await addDoc(collection(db, "users"), {
          nombre,
          pais,
          telefono,
          email,
        });
        alert("Usuario agregado exitosamente!");
        setNombre("");
        setPais("");
        setTelefono("");
        setEmail("");
      } catch (error) {
        console.error("Error al agregar el usuario: ", error);
      }
    };
  
    return (
        <> 
            <section>
                <div className="main">
                    <div className="main-img">
                        <img src=".//assets/uxdevschool-logo.png" alt="Logo Uxdevschool"/>
                    </div>
                    <div className="main-form">
                        <form onSubmit={handleSubmit} className="user-form">
                            <h2>Informacion de Usuario</h2>
                            <div className="form-grps">
                            <label>Nombre:</label>
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                            </div>
                            <div className="form-grps">
                            <label>Pais:</label>
                            <input
                                type="text"
                                value={pais}
                                onChange={(e) => setPais(e.target.value)}
                                required
                            />
                            </div>
                            <div className="form-grps">
                            <label>Telefono:</label>
                            <input
                                type="text"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                required
                            />
                            </div>
                            <div className="form-grps">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            </div>
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                            
                    </div>
                </div>
            </section>
        </> 
    );
  };
  
  export default Formulario;