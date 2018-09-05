'use strict';

/* eslint-disable fecs-camelcase */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const {INTEGER, DATE, STRING} = Sequelize;
        await queryInterface.createTable('users', {
            id: {type: INTEGER, primaryKey: true, autoIncrement: true},
            // eslint-disable-next-line
            name: STRING(30),
            age: INTEGER,
            created_at: DATE,
            updated_at: DATE
        });
    },

    down: async queryInterface => {
        await queryInterface.dropTable('users');
    }
};