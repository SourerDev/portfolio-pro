import { compareSync, genSaltSync, hashSync } from 'bcrypt-ts'
import axios, { type AxiosResponse } from 'axios'

export function isValidAdmin(username: string, password: string) {
  const Admin = {
    username: process.env.NEXT_PUBLIC_USERNAME,
    password: process.env.NEXT_PUBLIC_PASSWORD
  }
  if (!Admin.username || !Admin.password) return false

  const saltRounds = 10
  const salt = genSaltSync(saltRounds)
  const hashedUser = hashSync(Admin.username, salt)
  const hashedPass = hashSync(Admin.password, salt)

  const matchUser = compareSync(username, hashedUser)
  const matchPass = compareSync(password, hashedPass)

  if (!matchUser || !matchPass) return false

  return true
}

type cloudinary = {
  secure_url: string
}

export async function uploadImagesCloudinary(files: File[]) {
  const cloud_name = process.env.NEXT_PUBLIC_CLOUD_NAME || '';
  const preset_key = process.env.NEXT_PUBLIC_PRESET_KEY || '';

  const URL = 'https://api.cloudinary.com/v1_1/' + cloud_name + '/image/upload';

  const images_urls: string[] = [];
  const promises: Promise<AxiosResponse<cloudinary>>[] = [];

  files.forEach((file) => {
    const formdata = new FormData();
    formdata.append('file', file);
    formdata.append('upload_preset', preset_key);
    promises.push(axios.post(URL, formdata));
  });

  try {
    const responses = await Promise.all(promises);
    responses.forEach((res) => {
      const url = res?.data?.secure_url;
      if (url) {
        images_urls.push(url);
      }
    });
  } catch (err) {
    console.log(err);
  }

  return images_urls;
}
