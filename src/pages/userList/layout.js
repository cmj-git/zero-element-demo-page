module.exports = {
<<<<<<< HEAD
  xname: 'Flexbox',
  props: {

=======
  xname: 'Gridbox',
  props: {
    direction: 'column',
    justify: 'center row'
>>>>>>> 9613a87 (logs)
  },
  presenter: {
    xname: 'Flexbox',
    props: {
      direction: 'column',
<<<<<<< HEAD
      justify: 'center row',
=======
      justify: 'center row'
>>>>>>> 9613a87 (logs)
    },
    children: [
      {
        presenter: 'Avatar',
        gateway: {
          xname: 'Binding',
          props: {
            binding: {
<<<<<<< HEAD
              avatar: 'url'
=======
              name: 'url'
>>>>>>> 9613a87 (logs)
            }
          }
        }
      },
      {
        presenter: "Title",
        gateway: {
          xname: "Binding",
          props: {
<<<<<<< HEAD

=======
>>>>>>> 9613a87 (logs)
            binding: {
              name: "titleText"
            }
          }
        }
<<<<<<< HEAD
      },
    ]
=======
      }]
>>>>>>> 9613a87 (logs)
  },
  cart: {
    xname: 'Cart',
    props: {
<<<<<<< HEAD
      padding: '40px',
      margin: '20px',
      linewidth: 0
    }

  },
  container: 'ItemClickList',
}
=======
      padding: '5px 10px',
      margin: '5px',
      linewidth: 0
    }
  },
  container: 'SimCRUDList',
  navigation: {
    model: {
      api: {
        createAPI: '/api/v/navigation/navigations',
        getAPI: '/api/v/navigation/navigations/(id)',
        updateAPI: '/api/v/navigation/navigations/(id)',
        deleteAPI: ''
      },
      fields: [{
        label: '标题',
        field: 'name',
        type: 'input',
        required: {
          placeholder: '请输入标题'
        }
      },
      {
        label: '图片',
        field: 'url',
        type: 'input',
        required: {
          placeholder: '图片链接'
        }
      },
      {
        label: '描述',
        field: 'desc',
        type: 'input',
        height: '15px',
        required: {
          placeholder: '描述属性'
        }
      }
      ]
    }
  }
};
>>>>>>> 9613a87 (logs)
