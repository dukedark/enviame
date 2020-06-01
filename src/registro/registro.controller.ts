import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CreateRegistroDto} from './registro.dto'

@Controller('registro')
export class RegistroController {
    @HttpCode(200)
    @Post()
    create (@Body() createRegistroDto: CreateRegistroDto) {
        return 'Secreo el Registro';
    }
    @HttpCode(200)
    @Get()
    getAll(){
        return'Lista de Registros'
    }

    @HttpCode(200)
    @Put('id')
    update(@Body() updateRegistroDto: CreateRegistroDto){
        return 'Mensaje Actualizado'
    }

    @HttpCode(200)
    @Delete('id')
    delete(){
        return 'Mensaje eliminado'
    }

}
