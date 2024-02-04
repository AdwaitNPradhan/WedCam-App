import {AxiosError} from 'axios';
import {useState} from 'react';
import {
  CreateEventDTO,
  createEvent,
  getEventDetails,
  getEventMembers,
  getMyEvents,
  joinEvent,
} from '../api/events';

const useEventsAPI = () => {
  const [isLoading, setIsLoading] = useState(false);

  const GetEvents = async () => {
    try {
      setIsLoading(true);
      const response = await getMyEvents();
      return response.data;
    } catch (error) {
      console.error(error as AxiosError);
      return undefined;
    } finally {
      setIsLoading(false);
    }
  };
  const CreateEvents = async (newEventPayload: CreateEventDTO) => {
    try {
      setIsLoading(true);
      const response = await createEvent(newEventPayload);
      return response.data;
    } catch (error) {
      console.error(error as AxiosError);
      return undefined;
    } finally {
      setIsLoading(false);
    }
  };
  const JoinEvents = async (eventId: string) => {
    try {
      setIsLoading(true);
      const response = await joinEvent(eventId);
      return response.data;
    } catch (error) {
      console.error(error as AxiosError);
      return undefined;
    } finally {
      setIsLoading(false);
    }
  };
  const GetEventMembers = async (eventId: string) => {
    try {
      setIsLoading(true);
      const response = await getEventMembers(eventId);
      return response.data;
    } catch (error) {
      console.error(error as AxiosError);
      return undefined;
    } finally {
      setIsLoading(false);
    }
  };
  const GetEventDetails = async (eventId: string) => {
    try {
      setIsLoading(true);
      const response = await getEventDetails(eventId);
      return response.data;
    } catch (error) {
      console.error(error as AxiosError);
      return undefined;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    GetEvents,
    CreateEvents,
    JoinEvents,
    GetEventMembers,
    GetEventDetails,
  };
};

export default useEventsAPI;
