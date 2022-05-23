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
      delConfirmTips: true,
      delComfirmTips: true,
      api: {
        createAPI: '/api/crud/serviceModel/serviceModels',
        getAPI: '/api/crud/serviceModel/serviceModels/(id)',
        updateAPI: '/api/crud/serviceModel/serviceModels/(id)',
        deleteAPI: '/api/crud/serviceModel/serviceModels/(id)'
      },
      fields: [{
        label: 'masterTableModelId',
        field: 'masterTableModelId',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请输入 masterTableModelId',
        }
      },
      {
        label: 'modelType',
        field: 'modelType',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请输入 modelType',
        }
      },
      {
        label: 'modelId',
        field: 'modelId',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请输入 modelId',
        }
      },
      {
        label: 'modelName',
        field: 'modelName',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请输入 modelName',
        }
      },
      {
        label: 'name',
        field: 'name',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请输入 name',
        }
      },
      {
        label: 'note',
        field: 'note',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请输入 note',
        }
      }
      ]
    }
  }
};
