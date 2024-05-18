import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

export const databaseProvider=[ 
    {
        provide: 'DATABASE_CONNECTION',
        iject:[ConfigService],
        useFactory:(config: ConfigService)=>{
            const dataSource= new DataSource({
                type:'postgres',
                host: config.get('HOST'),
                port: +config.get('PORT_DB'),
                username:config.get('USERNAME'),
                password:config.get('PASSWORD'),
                database: config.get('DATABASE')
            });
            
            return dataSource.initialize();
        }
    }
]