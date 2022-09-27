import { ProductController } from "./controller/ProductController"
import { UserController } from "./controller/UserController"

export let Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
{
    method: "get",
    route: "/products",
    controller: ProductController,
    action: "listProducts"
},
{
    method: "get",
    route: "/products/:id",
    controller: ProductController,
    action: "getProduct"
},
{
    method: "post",
    route: "/products",
    controller: ProductController,
    action: "addProduct"
},
{
    method: "put",
    route: "/products/:id",
    controller: ProductController,
    action: "updateProduct"
},
{
    method: "delete",
    route: "/products/:id",
    controller: ProductController,
    action: "removePorduct"
}

]