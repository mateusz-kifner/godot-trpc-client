import { R } from "@praha/byethrow";
import { eq, inArray, sql } from "drizzle-orm";
import { db } from "@/server/db";
// import type { MetadataType } from "@/server/db/types";
import { users } from "./schema";
import type { UpdatedUser, User } from "./validator";

// compile query ahead of time
const userPrepareGetById = db.query.users
  .findFirst({
    where: eq(users.id, sql.placeholder("id")),
  })
  .prepare("userPrepareGetById");

async function getById(id: string): Promise<R.Result<User, string>> {
  const user = await userPrepareGetById.execute({ id });
  if (!user) return R.fail(`[UserService]: Could not find user with id ${id}`);
  return R.succeed(user);
}

async function create(_userData: Partial<User>) {
  // const newUser = await authDBAdapter.createUser?.({
  //   emailVerified: new Date(),
  //   ...userData,
  // } as AdapterUser);
  // if (!newUser)
  //   throw new Error(
  //     `[UserService]: Could not create user with email ${userData.email}`,
  //   );
  // return newUser;
}

async function deleteById(id: string): Promise<R.Result<boolean, string>> {
  const result = await db.delete(users).where(eq(users.id, id));
  if (!result)
    return R.fail(`[UserService]: Could not delete user with id ${id}`);
  return R.succeed(true);
}

async function update(userData: UpdatedUser): Promise<R.Result<User, string>> {
  const { id, ...dataToUpdate } = userData;
  const updatedUser = await db
    .update(users)
    .set(dataToUpdate)
    .where(eq(users.id, id))
    .returning();
  if (!updatedUser[0])
    return R.fail(`[UserService]: Could not update user with id ${id}`);
  return R.succeed(updatedUser[0]);
}

// compile query ahead of time
const userPrepareGetByEmail = db.query.users
  .findFirst({
    where: eq(users.email, sql.placeholder("email")),
  })
  .prepare("userPrepareGetByEmail");

async function getByEmail(email: string): Promise<R.Result<User, string>> {
  const user = await userPrepareGetByEmail.execute({ email });
  if (!user)
    return R.fail(`[UserService]: Could not find user with email ${email}`);
  return R.succeed(user);
}

// compile query ahead of time
const userPrepareGetManyById = db
  .select()
  .from(users)
  .where(inArray(users.id, sql.placeholder("ids")))
  .prepare("userPrepareGetManyById");

async function getManyByIds(ids: number[]): Promise<R.Result<User[], string>> {
  const users = await userPrepareGetManyById.execute({ ids });
  if (users.length !== ids.length)
    return R.fail(`[UserService]: Could not find users with ids ${ids}`);
  return R.succeed(users);
}

const userService = {
  getById,
  create,
  deleteById,
  update,
  getByEmail,
  getManyByIds,
};

export default userService;
