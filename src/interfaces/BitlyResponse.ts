export interface BitlyResponse {
    id: string;
    link: string;
    long_url: string;
    errors?: Array<{ field: string; error_code: string; message: string }>;
}
