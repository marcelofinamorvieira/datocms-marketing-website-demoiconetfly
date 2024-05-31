import { generateWrapper } from '@/components/WithRealTimeUpdates/generateWrapper';
import Content from './Content';
import RealTime from './RealTime';
import { type PageProps, type Query, type Variables, query } from './meta';

const Page = generateWrapper<PageProps, Query, Variables>({
  query,
  contentComponent: Content,
  realtimeComponent: RealTime,
});

export default Page;
