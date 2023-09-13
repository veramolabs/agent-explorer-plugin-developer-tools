import React, { useState } from 'react'
import { formatRelative } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useVeramo } from '@veramo-community/veramo-react'
import { PageContainer, ProList } from '@ant-design/pro-components'
import { VerifiableCredential } from '@veramo-community/react-components'
import { IDataStoreORM, UniqueVerifiableCredential } from '@veramo/core'
import { EllipsisOutlined } from '@ant-design/icons'
import IdentifierProfile from './components/IdentifierProfile'
import { getIssuerDID } from './utils/did'
import CredentialActionsDropdown from './components/CredentialActionsDropdown'
import { Button, Drawer } from 'antd'
import CreatePost from './components/CreatePost.js'

const BrainshareFeed = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate()
  const { agent } = useVeramo<IDataStoreORM>()
  const { data: credentials, isLoading } = useQuery(
    ['credentials', { agentId: agent?.context.name }],
    () =>
      agent?.dataStoreORMGetVerifiableCredentials({
        where: [{ column: 'type', value: ['VerifiableCredential,BrainsharePost'] }],
        order: [{ column: 'issuanceDate', direction: 'DESC' }],
      }),
  )


  return (
    <PageContainer
      footer={[
        <Button type="primary" onClick={showDrawer}>
        Compose
      </Button>
      ]}
    >
      <ProList
        ghost
        loading={isLoading}
        pagination={{
          defaultPageSize: 20,
          showSizeChanger: true,
        }}
        grid={{ column: 1, lg: 2, xxl: 2, xl: 2 }}
        onItem={(record: any) => {
          return {
            onClick: () => {
              navigate('/credentials/' + record.hash)
            },
          }
        }}
        metas={{
          title: {},
          content: {},
          actions: {
            cardActionProps: 'extra',
          },
        }}
        dataSource={credentials?.map((item: UniqueVerifiableCredential) => {
          return {
            title: (
              <IdentifierProfile
                did={getIssuerDID(item.verifiableCredential)}
              />
            ),
            actions: [
              <div>
                {formatRelative(
                  new Date(item.verifiableCredential.issuanceDate),
                  new Date(),
                )}
              </div>,
              <CredentialActionsDropdown credential={item.verifiableCredential}>
                <EllipsisOutlined />
              </CredentialActionsDropdown>,
            ],
            content: (
              <div style={{ width: '100%' }}>
                <VerifiableCredential credential={item.verifiableCredential} />
              </div>
            ),
            hash: item.hash,
          }
        })}
      />
    <>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open} width={800}>
        <CreatePost />
      </Drawer>
    </>
    </PageContainer>
  )
}

export default BrainshareFeed