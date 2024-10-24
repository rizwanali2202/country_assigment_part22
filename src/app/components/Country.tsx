


interface CountryInfo {
  name: string;
  population: number;
  capital: string;
}

interface CountryInformationProps {
  information?: CountryInfo;
  url: string;
}


export default function Countryinformation ({ information, url }: CountryInformationProps)  {
    return (
      <div>
        {
            information ? (  
            
                <>
                        <h1>Country Name: {information.name}</h1>
                        <h1>Population : {information.population}</h1>
                        <h1>Capital Name: {information.capital}</h1>
                </>
                         ) : (
                        
                            <h1>{url} Undefine country</h1>
                    
                            )
            } 
        </div>
    );
  }