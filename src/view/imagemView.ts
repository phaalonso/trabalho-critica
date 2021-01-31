import Imagem from "../models/Imagem";

export default {
    render(img: Imagem) {
        return {
            id: img.id,
            url: `http://localhost:3333/uploads/${img.path}`
        }
    },
    renderMany(imgs: Imagem[]) {
        return imgs.map(img => this.render(img));
    }
}