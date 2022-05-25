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
      //title
      //binding 绑定数据   api字段：组件固定值
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
      },
      {
        presenter: "Title",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              name: "titleText"
            }
          }
        }
      }
      ,
      // {
      //   presenter: "select-fetch",
      //   gateway: {
      //     xname: "Binding",
      //     props: {
      //       binding: {
      //         modelName: "titleText"
      //       }
      //     }
      //   }
      // }

      {
        presenter: {
          xname: 'Flexbox',
          props: {
            align: 'start',
            direction: 'column',
            flexWidth: 'auto-full'
          },
          presenter: 'Checkbox',


        },
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
              items: 'items'
            }
          }
        }
      },

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
        createAPI: '/api/crud/api_model/apiTableModel/apiTableModels',
        getAPI: '/api/crud/api_model/apiTableModel/apiTableModels/(id)',
        updateAPI: '/api/crud/api_model/apiTableModel/apiTableModels/(id)',
        deleteAPI: '/api/crud/api_model/apiTableModel/apiTableModels/(id)'
      },
      fields: [{
        label: '表模型标识',
        field: 'modelName',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请输入 表模型标识',
        }
      }, {
        label: '模型名称',
        field: 'name',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '模型名称',
        }
      },


      {

        label: '参数',
        field: 'fieldModelId',
        type: 'select-fetch',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '参数',

        },
        saveData: {
          //额外提交的字段和值
          typeName: 'name'
        },


        options: {
          api: '/api/crud/fieldModel/fieldModels',
          label: 'modelLabel',
          value: 'id',
          presenter: 'Checkbox',

        }
      }
      ]
    }
  }




};
