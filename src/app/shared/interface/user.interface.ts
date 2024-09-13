export interface UserInterface {
  name: string;
  avatar: {
    alt_text: string
    created_at: string
    file_name: string
    file_path: string | ArrayBuffer | null;
  };
  company: string;
  email: string;
  phone: string;
  role: string;
}
