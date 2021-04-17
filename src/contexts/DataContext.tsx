import React, {createContext, useState} from 'react';

interface DataContextTypes{
    data:DataTypes | any;
    handleSearch(data:DataTypes):void;
}

interface DataTypes{
    latitude: number;
    longitude : number; 
    city: string; 
    country_name: string;
    ip: string;
    region_name: string;
}

const Context = createContext({} as DataContextTypes);

function DataProvider({children}: any){
    const [data, setData] = useState<DataTypes>();

    async function handleSearch(data:DataTypes){
        setData(data);
    }

    return (
        <Context.Provider value={{
            data,
            handleSearch,
        }}>
            {children}
        </Context.Provider>
    )
}

export {Context, DataProvider};