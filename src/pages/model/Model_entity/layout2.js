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
        presenter: "SubtitleL",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              modelName: "contentTxt"
            }
          }
        }
      },
      {
        presenter: "SubtitleBig",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              name: "contentTxt"
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
      fill: '#f5f5f6',
      corner: '10px',


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
        label: 'modelName',
        field: 'modelName',
        type: 'input',
        rules: {
          isRequired: true
        },
        props: {
          placeholder: '请输入 表模型标识',
        }
      }, {
        label: 'name',
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
        label: '复选框',
        field: 'items',
        type: 'checkbox-fetch',
        rules: {
          isRequired: false
        },
        props: {
          placeholder: '请选择'
        },
        saveData: {
          //额外提交的字段和值
          isNotNull: 'isNotNull'
        },
        options: {
          modalTitle: '选择字段',
          api: '/api/crud/fieldModel/fieldModels',
          label: 'modelLabel',
          value: 'fieldModelId',
          itemField: 'fieldModelId' // 数组的 item 承载字段

        }
      }


      ]
    }
  }




};
