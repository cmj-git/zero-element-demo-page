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
        presenter: "SubtitleL",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              modelName: "contentTxt"
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
      fill: '#f5f5f6',
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
      fields: [
        {
          label: '表模型标识',
          field: 'modelName',
          type: 'input',
          rules: {
            isRequired: true
          },
          props: {
            placeholder: '请输入 表模型标识',
          }
        },

        {
          label: '模型名称',
          field: 'name',
          type: 'input',
          rules: {
            isRequired: true
          },
          props: {
            placeholder: '请输入 模型名称',
          }
        },
        {
          label: 'masterTableModelId',
          field: 'masterTableModelId',
          type: 'input',
          rules: {
            isRequired: true
          },
          props: {
            placeholder: '请输入 主表模型Id',
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
            placeholder: '请输入 模型类型',
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
            placeholder: '请输入 模型ID',
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
            placeholder: '请输入 记录',
          }
        }
      ]
    }
  }
};
