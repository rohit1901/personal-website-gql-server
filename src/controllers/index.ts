import { AppContext } from '@/types/interfaces/interfaces.common';
import { withErrorHandling } from '@/utils/index';

export const getBasics = async ({ db }: AppContext) =>
  withErrorHandling(async () => {
    const data = await db?.collection('resume').findOne();
    return data?.basics;
  }, 'Failed to fetch basics');

export const getWork = async ({ db }: AppContext) =>
  withErrorHandling(async () => {
    const data = await db?.collection('resume').findOne();
    return data?.work;
  }, 'Failed to fetch work');

export const getVolunteer = async ({ db }: AppContext) =>
  withErrorHandling(async () => {
    const data = await db?.collection('resume').findOne();
    return data?.volunteer;
  }, 'Failed to fetch volunteer');

export const getEducation = async ({ db }: AppContext) =>
  withErrorHandling(async () => {
    const data = await db?.collection('resume').findOne();
    return data?.education;
  }, 'Failed to fetch education');

export const getAwards = async ({ db }: AppContext) =>
  withErrorHandling(async () => {
    const data = await db?.collection('resume').findOne();
    return data?.awards;
  }, 'Failed to fetch awards');

export const getPublications = async ({ db }: AppContext) =>
  withErrorHandling(async () => {
    const data = await db?.collection('resume').findOne();
    return data?.publications;
  }, 'Failed to fetch publications');

export const getLanguages = async ({ db }: AppContext) =>
  withErrorHandling(async () => {
    const data = await db?.collection('resume').findOne();
    return data?.languages;
  }, 'Failed to fetch languages');

export const getCertificates = async ({ db }: AppContext) =>
  withErrorHandling(async () => {
    const data = await db?.collection('resume').findOne();
    return data?.certificates;
  }, 'Failed to fetch certificates');
