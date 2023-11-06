'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // 1. Users 모델에서
      this.hasOne(models.UserInfos, { // 2. UserInfos 모델에게 1:1 관계 설정을 합니다.
        sourceKey: 'userId',  // 3. Users 모델의 userId 컬럼을
        foreignKey: 'UserId', // 4. UserInfos 모델의 UserId 컬럼과 연결합니다.
      });

      // 1. Users 모델에서
      this.hasMany(models.Posts, { // 2. Posts 모델에게 1:N 관계 설정을 합니다.
        sourceKey: 'userId',  // 3. Users 모델의 userId 컬럼을
        foreignKey: 'UserId', // 4. Posts 모델의 UserId 컬럼과 연결합니다.
      });

      // 1. Users 모델에서
      this.hasMany(models.Comments, { // 2. Comments 모델에게 1:N 관계 설정을 합니다.
        sourceKey: 'userId',  // 3. Users 모델의 userId 컬럼을
        foreignKey: 'UserId', // 4. Comments 모델의 UserId 컬럼과 연결합니다.
      });

    }
  }

  Users.init({
    userId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};