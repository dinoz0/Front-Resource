import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const AddRessourceComponent = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [illustration, setIllustration] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [type, setTypeR] = useState("");
    const [relation, setRelation] = useState("");

    const [error, setError] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Vérification des champs vides
        if (
            !title ||
            !description ||
            !illustration ||
            !content ||
            !category ||
            !type ||
            !relation
        ) {
            setError("Tous les champs doivent être remplis");
            return;
        }



        const model = {
            title: title,
            description:description,
            illustration:illustration,
            content:content,
            id_category:category,
            id_type:type,
            id_relation:relation
        };
        axios
            .post("https://localhost:7196/api/Resource", model)
            .then((response) => {
                if (response.status === 200) {
                    console.log("Ajout de Ressource réussi");
                    // Redirect user to login page
                }
            })
            .catch((error) => {
                console.log("Ajout de ressource échoué ", error);
                setError("Erreur lors de l'ajout de la ressource");
            });
    };

    return (
        <div>
            <Navbar />
            <div className="container uniqueContainer">
                <div className="row">
                    <div className="col-xs-12">
                        <form onSubmit={handleFormSubmit}>
                            {error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )}
                            <div className="form-group">
                                <label htmlFor="title">Titre de la ressource</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                  className="form-control"
                                  id="description"
                                  rows="5"
                                  value={description}
                                  onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                              </div>

                            <div className="form-group">
                                <label htmlFor="content">Contenu de la ressource</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="illustration">Illustration</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="illustration"
                                    value={illustration}
                                    onChange={(e) =>
                                        setIllustration(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Catégorie</label>
                                <select className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="1">Catégorie 1</option>
                                    <option value="2">Catégorie 2</option>
                                    <option value="3">Catégorie 3</option>
                                    <option value="4">Catégorie 4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Type de Ressource</label>
                                <select className="form-control" id="typeRessource" value={type} onChange={(e) => setTypeR(e.target.value)}>
                                    <option value="1">Catégorie 1</option>
                                    <option value="2">Catégorie 2</option>
                                    <option value="3">Catégorie 3</option>
                                    <option value="4">Catégorie 4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Type de Relation</label>
                                <select className="form-control" id="relation" value={relation} onChange={(e) => setRelation(e.target.value)}>
                                    <option value="1">Catégorie 1</option>
                                    <option value="2">Catégorie 2</option>
                                    <option value="3">Catégorie 3</option>
                                    <option value="4">Catégorie 4</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Ajouter une Ressource
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRessourceComponent;
