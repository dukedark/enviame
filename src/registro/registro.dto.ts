export class CreateRegistroDto{
    imported_id?: number;
    shipping_order:string;
    order_price: string;
    type:string;
    weight:number;
    volume: number;
    n_packages: number;
    content_description:string;
    shipping_destination:string;
    name:string;
    phone:number;
    email:string;
    delivery_address: string;
    home_address: string;
    place: string;
    full_address: string;
    information: string;
    shipping_origin: string;
    warehouse_code:number;
    carrier: string;
    carrier_code:number;
    carrier_service: string;
    tracking_number:number;
}