import React, { useState,useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const AddRessourceComponent = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [illustration, setIllustration] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [typeR, setTypeR] = useState("");
    const [relation, setRelation] = useState("");

    const [error, setError] = useState("");
    const [categories, setCategories] = useState([]);
    const [typesRessource, setTypesRessource] = useState([]);
    const [relations, setRelations] = useState([]);

    useEffect(() => {
      axios.get("https://localhost:7196/api/Category").then((response) => {
        if (response.status === 200) {
          setCategories(response.data);
          console.log(response.data);

        }
      });

      axios.get("https://localhost:7196/api/TypeR").then((response) => {
      if (response.status === 200) {
        setTypesRessource(response.data);
        console.log(response.data);
      }
    });

      axios.get("https://localhost:7196/api/Relation").then((response) => {
        if (response.status === 200) {
          setRelations(response.data);
          console.log(response.data);
        }
      });
    }, []);
    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Vérification des champs vides
        if (
            !title ||
            !description ||
            !illustration ||
            !content ||
            !category ||
            !typeR ||
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
            relation: {
              relation_name:relation
            },
            category: {
              category_name: category
            },
            typeR: {
              type_name: typeR
            },
        };
        axios.post("https://localhost:7196/api/Resource", model)
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
                              <select
                                className="form-control"
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                              >
                                {categories.map((category) => (
                                  <option key={category.id} value={category.id}>
                                    {category.category_name}
                                  </option>
                                ))}
                              </select>
                            </div>


                            <div className="form-group">
                              <label htmlFor="typeR">Type de Ressource</label>
                              <select
                                className="form-control"
                                id="typeR"
                                value={typeR}
                                onChange={(e) => setTypeR(e.target.value)}
                              >
                                {typesRessource.map((typeR) => (
                                  <option key={typeR.id} value={typeR.id}>
                                    {typeR.type_name}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="form-group">
                              <label htmlFor="relation">Type de Relation</label>
                              <select
                                className="form-control"
                                id="relation"
                                value={relation}
                                onChange={(e) => setRelation(e.target.value)}
                              >
                                {relations.map((relation) => (
                                  <option key={relation.id} value={relation.id}>
                                    {relation.relation_name}
                                  </option>
                                ))}
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
