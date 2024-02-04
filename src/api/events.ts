import {User} from './auth';
import APIClient, {AuthAPIClient, Response} from './axios.config';
import {URLs} from './urls';
/*
const d = {
  "message": "",
  "statusCode": 201,
  "data": {
    "name": "string",
    "description": "string",
    "startAt": "1970-01-01T00:00:00.000Z",
    "endAt": "1970-01-01T00:00:00.000Z",
    "venue": "string",
    "estimatedParticipants": 0,
    "owner": {
      "id": "64feee7c-addb-42e2-ac06-8316242a22d6",
      "firstName": "Adwait",
      "email": "adwaitpradhan2001@gmail.com",
      "lastName": "Pradhan",
      "userType": "user",
      "created_at": "2024-01-28T14:51:12.691Z",
      "updated_at": "2024-01-31T12:18:18.538Z",
      "deleted_at": null
    },
    "id": "097303ec-50a1-4199-831e-85b4ef6f9c70",
    "created_at": "2024-01-31T12:20:52.326Z",
    "updated_at": "2024-01-31T12:20:52.326Z",
    "deleted_at": null
  }
};
*/
export interface Event {
  created_at: string;
  deleted_at: string;
  updated_at: string;
  name: string;
  description: string;
  startAt: string;
  endAt: string;
  venue: string;
  id: string;
  estimatedParticipants: number;
  owner: User;
}
export interface EventMember extends User {
  isOwner: boolean;
}

export interface EventDetails extends Event {
  memberCount: number;
}

export interface CreateEventDTO {
  name: string;
  description: string;
  venue: string;
  estimatedParticipants: number;
  startAt: number;
  endAt: number;
}

export const createEvent = async (
  eventDetails: CreateEventDTO,
): Promise<Response<Event>> => {
  const response = await APIClient.post(URLs.event, eventDetails);
  return response.data;
};

export const joinEvent = async (
  eventId: string,
): Promise<Response<undefined>> => {
  const response = await AuthAPIClient.get(`${URLs.event}/${eventId}/join`);
  return response.data;
};

export const getEventMembers = async (
  eventId: string,
): Promise<Response<EventMember[]>> => {
  const response = await AuthAPIClient.get(`${URLs.event}/${eventId}/members`);
  return response.data;
};

export const getMyEvents = async (): Promise<Response<Event[]>> => {
  const response = await AuthAPIClient.get(`${URLs.event}/mine`);
  return response.data;
};

export const getEventDetails = async (
  eventId: string,
): Promise<Response<EventDetails>> => {
  const response = await AuthAPIClient.get(`${URLs.event}/${eventId}`);
  return response.data;
};
