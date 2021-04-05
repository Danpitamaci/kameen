import api from '@/services/api'

export default {
    getAllEvents () {
        return api().get('api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier');
    }
}