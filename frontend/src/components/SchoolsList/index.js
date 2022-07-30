import React from 'react'
import 'antd/dist/antd.min.css'
import './index.css'
import { Table } from 'antd'

const dataTest = [
  {
    key: 1,
    idSchool: '0201',
    name: 'THPT Ba Vì',
    admissionScore: '30',
    slot: '300',
    typeSchool: false,
    address: {
      district: {
        name: 'Ba Vì',
        areaCode: '10',
      },
    },
  },
  {
    key: 2,
    idSchool: '1101',
    name: 'THPT Đồng Quan',
    admissionScore: '28',
    slot: '400',
    typeSchool: true,
    address: {
      district: {
        name: 'Phú Xuyên',
        areaCode: '11',
      },
    },
  },
].map((item) => ({
  ...item,
  typeSchool: item.typeSchool ? 'Chuyên' : 'Không chuyên',
  address: item.address.district.name + ', ' + 'Hà Nội',
  areaCode: item.address.district.areaCode,
  district: item.address.district.name,
}))

const groupAddressObj = dataTest.reduce((acc, obj) => {
  const key = 'Khu vực ' + obj['areaCode']
  if (!acc[key]) {
    acc[key] = []
  }
  const { district, ...others } = obj
  acc[key].push({ district })
  return acc
}, {})

const groupAddressArr = []
Object.entries(groupAddressObj).forEach(([key, value]) => {
  const item = {
    text: key,
    value: key,
    children: value.map((obj) => ({ text: obj.district, value: obj.district })),
  }
  console.log(item)
  groupAddressArr.push(item)
})

const columns = [
  {
    title: 'Mã trường',
    dataIndex: 'idSchool',
    sorter: (a, b) => a.idSchool - b.idSchool,
    width: '10%',
  },
  {
    title: 'Tên Trường',
    dataIndex: 'name',
    width: '15%',
  },
  {
    title: 'Chỉ tiêu',
    dataIndex: 'slot',
    sorter: (a, b) => a.slot - b.slot,
  },
  {
    title: 'Đã tuyển',
    dataIndex: 'slot',
    sorter: (a, b) => a.slot - b.slot,
  },
  {
    title: 'Điểm chuẩn nguyện vọng 1',
    dataIndex: 'admissionScore',
    sorter: (a, b) => a.admissionScore - b.admissionScore,
    width: '15%',
  },
  {
    title: 'Loại trường',
    dataIndex: 'typeSchool',
    filters: [
      {
        text: 'Trường không chuyên',
        value: 'Không chuyên',
      },
      {
        text: 'Trường chuyên',
        value: 'Chuyên',
      },
    ],
    onFilter: (value, record) => record.typeSchool.startsWith(value),
    filterSearch: true,
    width: '10%',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    filters: groupAddressArr,
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.address.includes(value),
    width: '30%',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
]

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra)
}

const SchoolsList = () => {
  return <Table columns={columns} dataSource={dataTest} onChange={onChange} />
}

export default SchoolsList
