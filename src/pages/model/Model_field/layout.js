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
              modelLabel: "contentTxt"
            }
          }
        }
      }, {
        presenter: "SubtitleBig",
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
        createAPI: '/api/crud/fieldModel/fieldModels',
        getAPI: '/api/crud/fieldModel/fieldModels/(id)',
        updateAPI: '/api/crud/fieldModel/fieldModels/(id)',
        deleteAPI: '/api/crud/fieldModel/fieldModels/(id)'
      },

      fields: [
        {
          label: 'modelName',
          field: 'modelName',
          type: 'input',
          rules: {
            isRequired: false
          },
          props: {
            placeholder: '请输入 表模型标识',
          }
        },
        {
          label: 'modelLabel',
          field: 'modelLabel',
          type: 'input',
          rules: {
            isRequired: false
          },
          props: {
            placeholder: '请输入 模型标签',
          }
        },
        {
          label: 'defaultValue',
          field: 'defaultValue',
          type: 'input',
          rules: {
            isRequired: false
          },
          props: {
            placeholder: '请输入 默认值',
          }
        },
        {
          label: 'isNotNull',
          field: 'isNotNull',
          type: 'input',
          rules: {
            isRequired: true
          },
          props: {
            placeholder: '请输入 非空',
          }
        },
        {
          label: 'isUnique',
          field: 'isUnique',
          type: 'input',
          rules: {
            isRequired: true
          },
          props: {
            placeholder: '请输入 唯一的',
          }
        },
        {
          label: 'defaultFieldName',
          field: 'defaultFieldName',
          type: 'input',
          rules: {
            isRequired: false
          },
          props: {
            placeholder: '请输入 defaultFieldName',
          }
        },
        {
          label: 'optionalFieldName',
          field: 'optionalFieldName',
          type: 'input',
          rules: {
            isRequired: false
          },
          props: {
            placeholder: '请输入 optionalFieldName',
          }
        },
        {
          label: 'fieldType',
          field: 'fieldType',
          type: 'input',
          rules: {
            isRequired: true
          },
          props: {
            placeholder: '请输入 fieldType',
          }
        },
        {
          label: 'fieldLength',
          field: 'fieldLength',
          type: 'input',
          rules: {
            isRequired: false
          },
          props: {
            placeholder: '请输入 fieldLength',
          }
        },
        {
          label: 'fieldFloatLength',
          field: 'fieldFloatLength',
          type: 'input',
          rules: {
            isRequired: false
          },
          props: {
            placeholder: '请输入 fieldFloatLength',
          }
        },
        {
          label: 'comments',
          field: 'comments',
          type: 'input',
          rules: {
            isRequired: false
          },
          props: {
            placeholder: '请输入 comments',
          }
        }

      ]
    }
  }
};
