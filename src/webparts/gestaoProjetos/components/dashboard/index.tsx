import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '../card';
import style from './style.module.scss';

export default function Dashboard({ props }) {

    const [projetos, setProjetos] = useState([]);

    useEffect(() => {

        function getAllProjects() {

            var url;

            if (typeof (props.active == "undefined") || props.active == 'all') {
                url = "/_api/web/lists/getByTitle('Projetos')/items";
            };

            if (props.active == 'true') {
                url = "/_api/web/lists/getByTitle('Projetos')/items?$filter=status eq 1";
            };

            if (props.active == 'false') {
                url = "/_api/web/lists/getByTitle('Projetos')/items?$filter=status eq 0";
            };

            axios
                .get(props.relativeUrl + url)
                .then(function (result) {
                    setProjetos(result.data.value);
                })
                .catch(function (error) {
                    console.log(error);
                })
        };

        getAllProjects();

    }, [props.active]);

    return (
        <div className={style.container}>
            <h1>{props.title}</h1>
            <div className={style.deck}>
                {
                    projetos &&
                    projetos.map(projeto => {
                        return (
                            <Card
                                title={projeto.Title}
                                estimateValue={projeto.valorEstimado}
                                revenueValue={projeto.valorFaturado}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}