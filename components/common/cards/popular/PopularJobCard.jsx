import React from "react";
import styles from "./popularjobcard.style";
import { Image, Text, TouchableOpacity, View } from "react-native";
import checkImageURL from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
	return (
		<TouchableOpacity
			style={styles.container(selectedJob, item)}
			onPress={() => handleCardPress(item)}>
			<TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
				<Image
					source={{
						uri: checkImageURL(item.employer_logo)
							? item.employer_logo
							: "https://placehold.co/400x400?text=NA&font=roboto"
					}}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</TouchableOpacity>
			<Text style={styles.companyName} numberOfLines={1}>
				{item.employer_name}
			</Text>
			<View>
				<Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
					{item.job_title}
				</Text>
				<Text style={styles.location}>{item.job_country}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default PopularJobCard;
