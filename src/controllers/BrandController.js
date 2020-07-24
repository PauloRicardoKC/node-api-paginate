import Brand from '../models/Brand'

class BrandController {

    async index(req, res) {
        try {
            const { page = 1 } = req.query
            const data = await Brand.paginate({}, { page, limit: 10 });

            if (data === null)
                res.status(204).send(data);
            else
                res.status(200).send(data);

        } catch (e) {
            res.status(500).send({
                message: 'Failed to process your request.'
            });
        }
    }

    async show(req, res) {
        try {
            var data = await Brand.findById(req.params.id);

            if (data === null)
                res.status(204).send(data);
            else
                res.status(200).send(data);

        } catch (e) {
            res.status(500).send({
                message: 'Falha ao processar sua requisição.' + e.message
            });
        }
    }

    async store(req, res) {
        try {
            await Brand.create(req.body);

            res.status(201).send({
                message: 'Registered successfully!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Failed to process your request. ' + e.message
            });
        }
    }

    async update(req, res) {
        try {
            await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true }) //new true se quiser retorna os dados atualizados
            res.status(200).send({
                message: 'Updated successfully!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Failed to process your request. ' + e.message
            });
        }
    }

    async destroy(req, res) {
        try {
            await Brand.findByIdAndRemove(req.params.id)
            res.status(200).send({
                message: 'Removed successfully!'
            });
        } catch (e) {
            res.status(500).send({
                message: 'Failed to process your request. ' + e.message
            });
        }
    }
}

export default new BrandController();