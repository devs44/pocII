module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
          'userFiles',
          'data',
          {
              allowNull: false,
              type: Sequelize.BLOB('long')
          })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('userFiles', 'data')
  }
};