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
              modelLabel: "titleText"
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
            isRequired: true
          },
          props: {
            placeholder: '请输入 modelName',
          }
        },
        {
          label: 'modelLabel',
          field: 'modelLabel',
          type: 'input',
          rules: {
            isRequired: true
          },
          props: {
            placeholder: '请输入 modelLabel',
          }
        },
        {
          label: 'defaultValue',
          field: 'defaultValue',
          type: 'input',
          rules: {
            isRequired: true
          },
          props: {
            placeholder: '请输入 defaultValue',
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
            placeholder: '请输入 isNotNull',
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
            placeholder: '请输入 isUnique',
          }
        },
        {
          label: 'defaultFieldName',
          field: 'defaultFieldName',
          type: 'input',
          rules: {
            isRequired: true
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
            isRequired: true
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
            placeholder: '请输入 varchar',
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
