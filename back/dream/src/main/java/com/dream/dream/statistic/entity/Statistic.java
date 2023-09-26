package com.dream.dream.statistic.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

@Document(indexName = "mysql_daily_statistic")
@ToString
@Getter
@Setter
@Builder
public class Statistic {

    @Id
    private String id;

    @Field(type = FieldType.Auto, name = "memberId")
    @Column(name = "memberId")
    private Long memberId;

    @Field(type = FieldType.Auto)
    private String keyword;
}
