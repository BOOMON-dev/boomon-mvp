export interface SuccessResponse<T> {
  success: boolean;
  statusCode: number;
  data: T;
}
