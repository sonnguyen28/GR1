import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.min.css'
import './index.css'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSchools } from 'src/redux/apiRequest'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SchoolsList = () => {
  const user = useSelector((state) => state.auth.login?.currentUser)
  const schoolsList = useSelector((state) => state.schools?.schools.allSchools)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    if (user?.accessToken) {
      getAllSchools(user?.accessToke, dispatch, axios)
    }
  }, [])
  const dataTest = schoolsList.map((item) => ({
    ...item,
    daTuyen: item.studentsList.length,
    typeSchool: item.typeSchool ? 'Chuyên' : 'Không chuyên',
    address: item.address.district.name + ', ' + 'Hà Nội',
    areaCode: item.address.district.areaCode,
    district: item.address.district.name,
  }))

  // const dataTest = [
  //   {
  //     key: 1,
  //     idSchool: '0201',
  //     name: 'THPT Ba Vì',
  //     admissionScore: '30',
  //     slot: '300',
  //     typeSchool: false,
  //     address: {
  //       district: {
  //         name: 'Ba Vì',
  //         areaCode: '10',
  //       },
  //     },
  //   },
  //   {
  //     key: 2,
  //     idSchool: '1101',
  //     name: 'THPT Đồng Quan',
  //     admissionScore: '28',
  //     slot: '400',
  //     typeSchool: true,
  //     address: {
  //       district: {
  //         name: 'Phú Xuyên',
  //         areaCode: '11',
  //       },
  //     },
  //   },
  // ].map((item) => ({
  //   ...item,
  //   typeSchool: item.typeSchool ? 'Chuyên' : 'Không chuyên',
  //   address: item.address.district.name + ', ' + 'Hà Nội',
  //   areaCode: item.address.district.areaCode,
  //   district: item.address.district.name,
  // }))

  const groupAddressObj = dataTest.reduce((acc, obj) => {
    const key = obj['areaCode']
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
      children: value
        .filter(
          (value, index, self) => index === self.findIndex((t) => t.district === value.district),
        )
        .map((obj) => ({ text: obj.district, value: obj.district })),
    }
    groupAddressArr.push(item)
  })
  const groupAddressArrv1 = groupAddressArr
    .sort((a, b) => parseInt(a['text']) > parseInt(b['text']))
    .map((item) => ({
      text: 'Khu vực: ' + item.text,
      value: 'Khu vực: ' + item.text,
      children: item.children,
    }))

  const columns = [
    {
      title: 'Mã',
      dataIndex: 'idSchool',
      sorter: (a, b) => a.idSchool - b.idSchool,
      width: '10%',
    },
    {
      title: 'Tên Trường',
      dataIndex: 'name',
      width: '20%',
    },
    {
      title: 'Chỉ tiêu',
      dataIndex: 'slot',
      sorter: (a, b) => a.slot - b.slot,
      width: '10%',
    },
    {
      title: 'Đã tuyển',
      dataIndex: 'daTuyen',
      sorter: (a, b) => a.slot - b.slot,
      width: '10%',
    },
    {
      title: 'Điểm chuẩn nguyện vọng 1',
      dataIndex: ['admissionScore', 'nomarl'],
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
      filters: groupAddressArrv1,
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.address.includes(value),
      width: '35%',
    },
  ]

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }

  return <Table columns={columns} dataSource={dataTest} onChange={onChange} />
}

export default SchoolsList
