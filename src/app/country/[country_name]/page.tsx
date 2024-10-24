// import { AnyAaaaRecord } from "node:dns";
import Link from "next/link";
import Country from "@/app/components/Country"

export default function CountryName({ params }:{params:{country_name : string}}) {

    const countries: {
        name: string,
        population: number,
        capital: string,
    }[] = [{
        name: "pakistan",
        population: 12345678,
        capital: "Islamabad"
    },

    {
        name: "india",
        population: 5564879,
        capital: "Delhi"
    },

    {
        name: "japan",
        population: 951456,
        capital: "tokeyo"
    },

    {
        name: "afghanistan",
        population: 1546879,
        capital: "Kabul"
    },]

    function findCountry(web_url: string){
        return countries.find(country => country.name == web_url);

    }
    const result = findCountry(params.country_name)







    return (
        <div>
            <Country information = {result} url = {params.country_name}/>

            <div>
                <li className="cust_button">
                    <Link className="" href="/">
                        Back
                    </Link>
                </li>
            </div>
        </div>
    );
}