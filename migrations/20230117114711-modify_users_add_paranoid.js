module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
          'Users',
          'soft_delete',
          {
              allowNull: true,
              type: Sequelize.DATE
          })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Users', 'soft_delete')
  }
};