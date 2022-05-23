module.exports = {
  xname: 'Gridbox',
  props: {
    columns: 10
  },
  presenter: {
    xname: 'Flexbox',
    props: {
      direction: 'column',
      justify: 'center row'
    },
    children: [
      {
        presenter: "Title",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              modelName: "titleText"
            }
          }
        }
      }


    ]
  },
  cart: {
    xname: 'Cart',
    props: {
      padding: '5px 10px',
      margin: '5px',
      linewidth: 1,
      fill: '#c9daf8',
      corner: '10px'
    }
  },
  container: 'SimCRUDList',
  navigation: {
    model: {
      delComfirmTips: true,
      api: {
        createAPI: '/api/crud/serviceModel/serviceModels',
        getAPI: '/api/crud/serviceModel/serviceModels(id)',
        updateAPI: '/api/crud/serviceModel/serviceModels(id)',
        deleteAPI: '/api/crud/serviceModel/serviceModels(id)'
      },
      fields: [{
        label: '标题',
        field: 'name',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请输入标题',
        }
      }
      ]
    }
  }
};
