module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
          'userFiles',
          'soft_delete',
          {
              allowNull: true,
              type: Sequelize.DATE
          })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('userFiles', 'soft_delete')
  }
};