module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, //db is going o use the provided default value for that field if we do not provide
    },
  });

  //define the relationship between the TodoItems and the Todo objects
  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      //If we delete a todo, it's associated todo items should be deleted as well
      //cascade the delete action
      onDelete: 'CASCADE',
    });
  };

  return TodoItem;
};
