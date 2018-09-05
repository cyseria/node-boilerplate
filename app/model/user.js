'use strict';

/* eslint-disable fecs-camelcase */
module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const User = app.model.define('user', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // eslint-disable-next-line
        name: STRING(30),
        age: INTEGER,
        created_at: DATE,
        updated_at: DATE
    });

    return User;
};
