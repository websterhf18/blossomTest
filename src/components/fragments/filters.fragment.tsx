import React from 'react';

import {Text, View, Modal, TouchableOpacity} from 'react-native';
import Arrow from '@src/assets/arrow.svg';
import ButtonsFilterComponent from '../buttons-filter.component';

export default function FiltersFragment({modalVisible, setModalVisible}: any) {
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View className="flex-1 mt-20 bg-white rounded-lg shadow-md shadow-black">
        <View className="flex-row ml-4 mt-4 mr-4 items-center">
          <TouchableOpacity onPress={() => closeModal()}>
            <View className="flex-none w-20">
              <Arrow />
            </View>
          </TouchableOpacity>
          <View className="grow items-center">
            <Text className="text-base">{'Filters'}</Text>
          </View>
          <View className="flex-none w-20"></View>
        </View>
        <ButtonsFilterComponent />
        <View className="ml-4 mr-4 mt-auto mb-10">
          <View className="border rounded-lg border-gray-200 bg-gray-100 w-full h-10">
            <Text className="text-sm m-auto">{'Filter / Sorting'}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}
