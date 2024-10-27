type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
// Використання Partial<User>, щоб дозволити часткове оновлення
function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
