import { IDropdownOption } from "@fluentui/react/lib/components/Dropdown";
import axios  from "axios";

export const ObtenerLista = async () => {

    const baseURL = "https://jsonplaceholder.typicode.com/posts/";
    let lista: IDropdownOption[] = [];

    await axios.get(baseURL).then((response) => {
        response.data.forEach((element: { id: any; title: any; }) => {
            lista.push({ key: element.id, text: element.title });
        });

        });

    return lista;

}

export default ObtenerLista;