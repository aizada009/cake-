new Vue({
    el: '.sample',
    data: {
        layers: [],
        layersTypes: {
            biscuit: {
                priceism: 50,
                label: 'Biscuit'
            },
            beze: {
                priceism: 100,
                label: 'Beze'
            }
        },
        defaultLayerType: 'biscuit',
        defaultHeight: 4
    },
    computed: {
        price(){
            let sum = 0;
            this.layers.forEach((layer) => {
                sum += layer.height * this.layersTypes[layer.type].priceism;
                
            });
            return sum;
        }
    },
    methods: {
        addLayer(){
            this.layers.push({
                type: this.defaultLayerType,
                height: this.defaultHeight
            });
        },
        deleteLayer(i){
            this.layers.splice(i, 1);
        }
    }
})