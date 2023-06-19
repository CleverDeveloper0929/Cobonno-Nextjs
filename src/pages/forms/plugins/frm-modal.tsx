import { ReactElement } from 'react';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import SimpleModal from 'components/forms/plugins/Modal/SimpleModal';
import ServerModal from 'components/forms/plugins/Modal/ServerModal';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';

// ==============================|| MODAL PAGE ||============================== //

const Modal = () => (
  <Page title="Modal">
    <MainCard title="Simple Modal" secondary={<SecondaryAction link="https://next.material-ui.com/components/modal/" />}>
      <ServerModal />
      <SimpleModal />
    </MainCard>
  </Page>
);

Modal.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Modal;
